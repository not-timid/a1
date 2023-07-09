'use client'
import useI18nEn from '../../../hooks/use-i18n-en'

export default function MoodboardEn() {
  const { t } = useI18nEn()
  return <h1 className="font-serif">{t('moodboard.title')}</h1>
}
