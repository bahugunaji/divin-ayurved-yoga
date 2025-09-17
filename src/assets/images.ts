// Centralized image paths. Place matching files in public/images

export const IMAGES = {
  HERO_POSE: '/images/yoga-pose.jpg',
  INSTRUCTOR: '/images/instructor.jpg',
  LEAF: 'https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  MEDITATION: 'https://images.pexels.com/photos/33884013/pexels-photo-33884013/free-photo-of-sound-therapy-session-with-singing-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  RETREAT: 'https://images.pexels.com/photos/8436643/pexels-photo-8436643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

export type ImageKey = keyof typeof IMAGES;


