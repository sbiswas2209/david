import "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className='grid grid-cols-2 gap-10 m-11'>
        <div className='grid grid-row-2 gap-4'>
          <h3 className="lg:text-3xl sm:text-base">Developed By</h3>
          <a href="https://sagnikbiswas.netlify.app" title="Lockdown treated me well💅">
          <p className="lg:text-2xl sm:text-lg">Sagnik Biswas 🤘 2021</p>
          </a>
        </div>
        <div className='lg:grid grid-cols-3 gap-4 sm:grid grid-rows-3 gap-4'>
            <a href="https://www.linkedin.com/in/sbiswas2209/" target='_blank'>
                <p className='text-yellow-400 text-lg'>LinkedIn</p>
            </a>
            <a href="https://www.github.com/sbiswas2209/" target='_blank'>
                <p className='text-yellow-400 text-lg'>Github</p>
            </a>
            <a href="https://www.instagram.com/_its_sagnik" target='_blank'>
                <p className='text-yellow-400 text-lg'>Instagram</p>
            </a>
        </div>
      </div>
      <p className='text-sm text-center pb-4'>
          Inspired by <a href="https://bchiang7.github.io/" target='_blank' className='text-yellow-400'>Brittany Chiang</a><br />
          Built on the amazing <a href="https://nextjs.org/" target='_blank' className='text-yellow-400'>Next.js</a> and <a href="https://tailwindcss.com/" target='_blank' className='text-yellow-400'>Tailwind CSS</a>
      </p>
    </footer>
  );
};

export default Footer;