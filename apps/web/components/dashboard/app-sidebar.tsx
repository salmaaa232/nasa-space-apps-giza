"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/routing"
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DASHBOARD_ROLES_CONFIG, type DashboardRole } from "./dashboard-config"
import { getShellNavigation, isNavigationActive } from "./dashboard-navigation"
import styles from "./dashboard-shell.module.css"

export function AppSidebar({ currentRole }: { currentRole: DashboardRole }) {
  const pathname = usePathname()
  const t = useTranslations("Dashboard")
  const RoleIcon = DASHBOARD_ROLES_CONFIG[currentRole].icon

  return (
    <aside className={styles.sidebarRegion}>
      <Sidebar collapsible="none" className={styles.sidebar}>
        <div className={styles.roleBadge}>
          {currentRole === "participant" ? (
            <Image
              src="/dashboard/participant.svg"
              width={10}
              height={10}
              alt=""
            />
          ) : (
            <RoleIcon size={10} aria-hidden="true" />
          )}
          <span>{t(`shell.roles.${currentRole}`)}</span>
        </div>
        <nav
          aria-label={t("shell.navigation")}
          className={styles.navigation}
          data-dashboard-navigation=""
        >
          {getShellNavigation(currentRole).map((section, index) => (
            <div className={styles.navGroup} key={section.titleKey ?? index}>
              {section.titleKey && (
                <p className={styles.groupLabel}>{t(section.titleKey)}</p>
              )}
              <SidebarMenu className={styles.navList}>
                {section.items.map((item) => {
                  const active = isNavigationActive(pathname, item, currentRole)
                  const asset = active
                    ? (item.activeAsset ?? item.asset)
                    : item.asset
                  return (
                    <SidebarMenuItem key={item.url} className={styles.navItem}>
                      <SidebarMenuButton
                        render={
                          <Link
                            href={item.url}
                            prefetch={false}
                            aria-current={active ? "page" : undefined}
                          />
                        }
                        isActive={active}
                        className={styles.navLink}
                      >
                        <span className={styles.navIcon}>
                          {asset ? (
                            <Image
                              src={`/dashboard/${asset}.svg`}
                              loading="eager"
                              width={18}
                              height={18}
                              alt=""
                            />
                          ) : (
                            <item.icon size={18} aria-hidden="true" />
                          )}
                        </span>
                        <span>{t(item.titleKey)}</span>
                        {active && (
                          <Image
                            className={styles.navChevron}
                            src="/dashboard/chevron.svg"
                            width={12}
                            height={12}
                            alt=""
                          />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </div>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <Image src="/dashboard/location.svg" width={12} height={12} alt="" />
          <p>
            {t("shell.location")}
            <br />
            {t("shell.missionNote")}
          </p>
        </div>
      </Sidebar>
    </aside>
  )
}
