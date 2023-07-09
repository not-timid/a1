'use client'
import useI18nEn from '../../hooks/use-i18n-en'

export default function HomeEn() {
  const { t } = useI18nEn()
  return <h1 className="font-serif">{t('home.title')}</h1>
}
