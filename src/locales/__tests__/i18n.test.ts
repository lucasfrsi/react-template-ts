import { i18n } from 'locales/i18n';

describe('i18n', () => {
  it('should initiate i18n', async () => {
    const t = await i18n;
    expect(t).toBeDefined();
  });

  it('should initiate i18n with translations', async () => {
    const t = await i18n;
    expect(t('i18nFeature.language').length).toBeGreaterThan(0);
  });
});
