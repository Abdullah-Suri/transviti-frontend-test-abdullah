const ProfileInsight = () => {
  return (
    <div className='bg-white rounded-[10px] p-5 mt-2.5'>
        <div className='flex items-center justify-between py-2.5 border-b'>
            <div className='font-medium text-sm'>Profile Visitors</div>
            <div className='font-medium text-primary'>140</div>
        </div>
        <div className='flex items-center justify-between py-2.5 border-b'>
            <div className='font-medium text-sm'>Resume Viewers</div>
            <div className='font-medium text-primary'>20</div>
        </div>
        <div className='flex items-center justify-between py-2.5 border-b'>
            <div className='font-medium text-sm'>My Jobs</div>
            <div className='font-medium text-primary'>88</div>
        </div>
    </div>
  )
}

export { ProfileInsight }