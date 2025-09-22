require('dotenv').config();

function getConfig() {
  return {
    gateway: process.env.GATEWAY || 'pushinpay',
    environment: process.env.ENVIRONMENT || 'production',
    generateQRCodeOnMobile: process.env.GENERATE_QR_CODE_ON_MOBILE === 'true',
    
    syncpay: {
      clientId: process.env.SYNCPAY_CLIENT_ID || '',
      clientSecret: process.env.SYNCPAY_CLIENT_SECRET || ''
    },
    
    pushinpay: {
      token: process.env.PUSHINPAY_TOKEN || ''
    },
    
    webhook: {
      baseUrl: process.env.WEBHOOK_BASE_URL || 'https://privacy-sync.vercel.app',
      secret: process.env.WEBHOOK_SECRET || ''
    },
    
    model: {
      name: process.env.MODEL_NAME || 'Geovanna abreu',
      handle: process.env.MODEL_HANDLE ? (process.env.MODEL_HANDLE.startsWith('@') ? process.env.MODEL_HANDLE : `@${process.env.MODEL_HANDLE}`) : '@geovannabreuofcc',
      bio: process.env.MODEL_BIO || 'Oii sou a Geovanna, 🥰 Amo fazer sexting, avaliações e vídeos customizados! Aqui vc encontra meus nudes, pézinhos, masturbação e muito mais! 🤭🤭 To online todo dia! Me deixa ser sua ninfetinha favorita? 😈💕'
    },
    
    plans: {
      monthly: {
        buttonId: process.env.PLAN_MONTHLY_BUTTON_ID || 'btn-1-mes',
        label: process.env.PLAN_MONTHLY_LABEL || '1 mês',
        priceLabel: process.env.PLAN_MONTHLY_PRICE_LABEL || 'R$ 19,90',
        price: parseFloat(process.env.PLAN_MONTHLY_PRICE) || 19.90,
        description: process.env.PLAN_MONTHLY_DESCRIPTION || 'Assinatura mensal'
      },
      quarterly: {
        buttonId: process.env.PLAN_QUARTERLY_BUTTON_ID || 'btn-3-meses',
        label: process.env.PLAN_QUARTERLY_LABEL || '3 meses (30% off)',
        priceLabel: process.env.PLAN_QUARTERLY_PRICE_LABEL || 'R$ 49,90',
        price: parseFloat(process.env.PLAN_QUARTERLY_PRICE) || 49.90,
        description: process.env.PLAN_QUARTERLY_DESCRIPTION || 'Assinatura trimestral'
      },
      semestrial: {
        buttonId: process.env.PLAN_SEMESTRIAL_BUTTON_ID || 'btn-6-meses',
        label: process.env.PLAN_SEMESTRIAL_LABEL || '6 meses (40% off)',
        priceLabel: process.env.PLAN_SEMESTRIAL_PRICE_LABEL || 'R$ 89,90',
        price: parseFloat(process.env.PLAN_SEMESTRIAL_PRICE) || 89.90,
        description: process.env.PLAN_SEMESTRIAL_DESCRIPTION || 'Assinatura semestral'
      }
    },
    
    redirectUrl: process.env.REDIRECT_URL || 'https://stellabeghini.com/oferta-premiada/'
  };
}

function saveConfig(newConfig) {
  console.log('⚠️ Configuração salva em variáveis de ambiente (.env)');
  console.log('Para alterar configurações, edite o arquivo .env');
}

module.exports = { getConfig, saveConfig };
