import { MdOutlineContactless } from 'react-icons/md';
import { GrGallery,GrAnnounce } from 'react-icons/gr';
import { SlCalender,SlEarphonesAlt } from 'react-icons/sl';
import { GiTakeMyMoney } from 'react-icons/gi';
import { IoImagesOutline } from 'react-icons/io5';
import { TfiAnnouncement } from 'react-icons/tfi';





export const banner = [
  {
    id: 1,
    image: '/banner/pic-1.jpg',
  },
  {
    id: 2,
    image: '/banner/pic-2.jpg',
  },
  {
    id: 3,
    image: '/banner/pic-3.jpg',
  },
  {
    id: 4,
    image: '/banner/pic-4.jpg',
  },
  {
    id: 5,
    image: '/banner/pic-5.jpg',
  },
  {
    id: 6,
    image: '/banner/pic-6.jpg',
  },
]

export const event = [
  {
    id: 1,
    image: '/shoots/one.jpg',
  },
  {
    id: 2,
    image: '/shoots/two.jpg',
  },
  {
    id: 3,
    image: '/shoots/three.jpg',
  },
  {
    id: 4,
    image: '/shoots/four.jpg',
  },
  {
    id: 6,
    image: '/shoots/six.jpg',
  },
  {
    id: 7,
    image: '/shoots/seven.jpg',
  },
  {
    id: 8,
    image: '/shoots/eight.jpg',
  },
  {
    id: 9,
    image: '/shoots/nine.jpg',
  },
  {
    id: 5,
    image: '/shoots/five.jpg',
  },
]

export const professional = [
  {
    id: 1,
    title: 'Birthday',
    image: [1, '/professional/birthday-1.jpg', '/professional/birthday-2.jpg'],
  },
  {
    id: 2,
    title: 'company event',
    image: [
      2,
      '/professional/company_event-1.jpg',
      '/professional/company_event-2.jpg',
    ],
  },
  {
    id: 3,
    title: 'marriage ceremony',
    image: [
      3,
      '/professional/marriage_ceremony-2.jpg',
      '/professional/marriage_ceremony-3.jpg',
    ],
  },
  {
    id: 4,
    title: 'Wedding',
    image: [4, '/professional/wedding-1.jpg', '/professional/wedding-2.jpg'],
  },
]

export const navIcon = [
  {
    id: 1,
    icon: '/images/image-gallery.png',
    title: 'Gallery',
    img:'<IoImagesOutline />',
    text:<span className='icon'><IoImagesOutline/></span>
  },
  {
    id: 2,
    icon: '/images/book.png',
    title: 'Booking',
    img:'<SlCalender/>',
    text:<span className='icon'><SlCalender/></span>
   
  },
  {
    id: 3,
    icon: '/images/pricing.png',
    title: 'Pricing',
    img:'<GiTakeMyMoney/>',
    text:<span className='icon'><GiTakeMyMoney/></span>
    
  },
  {
    id: 4,
    icon: '/images/megaphone.png',
    title: 'News',
    img:'<TfiAnnouncement/>',
    text:<span className='icon'><TfiAnnouncement/></span>
  },
  {
    id: 5,
    icon: '/images/support.png',
    title: 'Contactus',
    img:'<SlEarphonesAlt/>',
    text:<span className='icon'><SlEarphonesAlt/></span>
  },
]

export const navbar=[
  {
      id:1,
      icon:'/images/house.png',
      route:'root'
  },
  {
      id:2,
      icon:'/images/gallery.png',
      route:'gallery'
  },
  {
      id:3,
      icon:'/images/price-tag.png',
      route:'pricing'
  },
  {
      id:4,
      icon:'/images/info.png',
      route:'contact'
  },
  {
      id:5,
      icon:'/images/booking.png',
      route:'booking'
  },
]
