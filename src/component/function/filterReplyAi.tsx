import {dummyData} from '../../dummyData/data';
import {ChatItem} from '../../type/type';

export function getFAQAnswer(input: string): ChatItem {
  const lower = input.toLowerCase();

  if (lower.includes('lena')) {
    return {
      sender: 'bot',
      recipient: 'user',
      chat: dummyData.about.answer,
      type: 'single',
    };
  }

  if (lower.includes('product') || lower.includes('produk')) {
    return {
      sender: 'bot',
      recipient: 'user',
      chat: dummyData.products.answer,
      type: 'multi',
    };
  }

  if (lower.includes('client') || lower.includes('klien')) {
    return {
      sender: 'bot',
      recipient: 'user',
      chat: dummyData.clients.answer,
      type: 'single',
    };
  }

  return {
    sender: 'bot',
    recipient: 'user',
    chat: [
      {
        image: '',
        text: 'Maaf, saya belum punya jawaban untuk pertanyaan itu.',
      },
    ],
    type: 'single',
  };
}
