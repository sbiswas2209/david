const Resume = () => {
    return ( 
        <div id="resume" className='lg:mt-44 mt-11 lg:mb-44 mb-11 flex justify-center w-full'>
            <a href="https://s3.ap-south-1.amazonaws.com/com.personal.profile-page/resume.pdf">
            <button className="rounded-md transition duration-700 ease-in-out hover:-transition align-middle p-4 border-2 border-yellow-400 hover:bg-yellow-400 focus:outline-none">Download Resume</button>
            </a>
        </div>
     );
}
 
export default Resume;