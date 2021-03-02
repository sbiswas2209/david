import Form from "./form"

const Intro = () => {
    return ( 
        <div className='ml-11 lg:mt-96 mt-52 grid grid-rows-3 gap-5'>
            <h3 className='text-5xl'>Hello!!! 👋</h3>
            <p className='text-3xl'>I'm Sagnik Biswas, <br/>Design Inspires me,<br/>Code drives me!</p>
            <div className='lg:grid grid-cols-2 sm:grid grid-rows-2 gap-2'>
                <p className='col-span-1 pt-4 text-3xl'>Get in touch ✍</p>
                <Form />
            </div>
        </div>
     );
}
 
export default Intro;