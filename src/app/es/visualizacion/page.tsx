'use client'
import useI18nEs from '../../../hooks/use-i18n-es'

export default function VisualEs() {
  const { t } = useI18nEs()
  return <h1 className="font-serif">{t('visual.title')}</h1>
}
