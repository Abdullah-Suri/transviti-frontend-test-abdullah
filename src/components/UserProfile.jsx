import profileBanner from '@/assets/img/profile-banner.png'
import userProfileImg from '@/assets/img/profile-img.png'

const UserProfile = () => {
  return (
    <div className='w-full rounded-[10px] bg-white border border-white'>
      <div className='relative'>
        <img src={profileBanner} className='w-full rounded-t-[10px]' alt="profile banner iamge" />
        <img src={userProfileImg} className='xl:size-[86px] md:size-[80px] sm:size-[120px] size-[90px] absolute top-1/2 left-1/2 -translate-x-1/2' alt="user profile img" />
      </div>
      <div className='xl:pt-[51px] pt-12 pb-5 text-center xl:px-10 px-5'>
        <h2 className='text-lg font-semibold'>Albert Flores</h2>
        <p className='py-1 text-sm font-medium w-full xl:max-w-[236px] mx-auto line-clamp-2'>Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web</p>
        <p className='text-teriatory text-sm'>Clinton, Maryland</p>
      </div>
    </div>
  )
}

export { UserProfile }