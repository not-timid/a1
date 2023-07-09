'use client'
import useI18nEn from '../../../hooks/use-i18n-en'

export default function FloorplanEn() {
  const { t } = useI18nEn()
  return <h1 className="font-serif">{t('floorplan.title')}</h1>
}
