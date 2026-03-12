// Shared constants for schema URLs and configuration
// Source: https://schema.org documentation

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com'

export const ORGANIZATION_ID = `${BASE_URL}/#organization`
export const PERSON_ID = `${BASE_URL}/#person`

export type Locale = 'en' | 'ja'
