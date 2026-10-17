import {
  ArrayMaxSize,
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsEnum,
  IsISO8601,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { TeamStatus } from '@prisma/client';

export class UpdateProfileDto {
  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(160)
  institution?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(80)
  academicLevel?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => Array.isArray(value) ? value.map(item => typeof item === 'string' ? item.trim() : item) : value)
  @IsArray()
  @ArrayMaxSize(50)
  @ArrayUnique()
  @IsString({ each: true })
  @MinLength(1, { each: true })
  @MaxLength(64, { each: true })
  skills?: string[];

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(1000)
  bio?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => Array.isArray(value) ? value.map(item => typeof item === 'string' ? item.trim() : item) : value)
  @IsArray()
  @ArrayMaxSize(50)
  @ArrayUnique()
  @IsString({ each: true })
  @MinLength(1, { each: true })
  @MaxLength(64, { each: true })
  interests?: string[];

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(3000)
  experience?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(200)
  preferredChallenge?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsEnum(TeamStatus)
  teamStatus?: TeamStatus;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(100)
  desiredRole?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(2048)
  @ValidateIf((_object, value) => value !== '')
  @IsUrl({ protocols: ['https', 'http'], require_protocol: true })
  githubUrl?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(2048)
  @ValidateIf((_object, value) => value !== '')
  @IsUrl({ protocols: ['https', 'http'], require_protocol: true })
  linkedinUrl?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(2048)
  @ValidateIf((_object, value) => value !== '')
  @IsUrl({ protocols: ['https', 'http'], require_protocol: true })
  portfolioUrl?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsBoolean()
  isPublic?: boolean;

  @ValidateIf((_object, value) => value !== undefined)
  @IsBoolean()
  shareProjectsWithMentors?: boolean;

  @ValidateIf((_object, value) => value !== undefined)
  @IsBoolean()
  hideFromSearch?: boolean;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  name?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(40)
  phone?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MaxLength(2048)
  @ValidateIf((_object, value) => value !== '')
  @IsUrl({ protocols: ['https', 'http'], require_protocol: true })
  avatar?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsISO8601({ strict: true })
  expectedUpdatedAt?: string;
}
