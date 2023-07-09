'use client'
import useI18nEs from '../../hooks/use-i18n-es'

export default function HomeEs() {
  const { t } = useI18nEs()
  return <h1 className="font-serif">{t('home.title')}</h1>
}
