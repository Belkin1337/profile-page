import { createI18n } from 'next-international'

export const { 
  useI18n, 
  useScopedI18n, 
  I18nProvider, 
  getLocaleProps, 
  useChangeLocale, 
  useCurrentLocale, 
} = createI18n({
  ru: () => import(
    '@/lib/locales/ru'
  ),
  en: () => import(
    '@/lib/locales/en'
  ),
  uk: () => import(
    '@/lib/locales/uk'
    ),
  kz: () => import(
    "@/lib/locales/kz"
    ),
  he: () => import(
    "@/lib/locales/he"
    ),
  be: () => import(
    "@/lib/locales/be"
    )
})