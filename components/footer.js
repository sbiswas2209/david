import "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className='grid grid-cols-2 gap-10 m-11'>
        <div className='grid grid-row-2 gap-4'>
          <h3 className="lg:text-3xl sm:text-base">Developed By</h3>
          <p className="lg:text-2xl sm:text-lg">Sagnik Biswas ✨ 2021</p>
        </div>
        <div className='lg:grid grid-cols-3 gap-4 sm:grid grid-rows-3 gap-4'>
            <a href="https://www.linkedin.com/in/sbiswas2209/">
                <p className='text-blue-700 text-lg'>LinkedIn</p>
            </a>
            <a href="https://www.github.com/sbiswas2209/">
                <p className='text-blue-700 text-lg'>Github</p>
            </a>
            <a href="https://www.instagram.com/_its_sagnik">
                <p className='text-blue-700 text-lg'>Instagram</p>
            </a>
        </div>
      </div>
      <p className='text-sm text-center'>
          Inspired by <a href="https://bchiang7.github.io/" className='text-blue-700'>Brittany Chiang</a>
      </p>
    </footer>
  );
};

export default Footer;
