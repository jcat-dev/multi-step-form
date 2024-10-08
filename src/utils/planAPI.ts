import { Plan } from '../types/Plan'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

export const planAPI = new Promise<Plan[]>((res, rej) => res(
  [
    {
      id: '1',
      title: 'arcade',
      periodWithPrice: [
        {
          price: 9,
          period: 'monthly'
        },
        {
          price: 90,
          period: 'yearly'
        }
      ],
      img: arcadeIcon
    },

    {
      id: '2',
      title: 'advanced',
      periodWithPrice: [
        {
          price: 12,
          period: 'monthly'
        },
        {
          price: 120,
          period: 'yearly'
        }
      ],
      img: advancedIcon
    },

    {
      id: '3',
      title: 'pro',
      periodWithPrice: [
        {
          price: 15,
          period: 'monthly'
        },
        {
          price: 150,
          period: 'yearly'
        }
      ],
      img: proIcon
    }
  ]
))