import React from 'react'
import Student from '../image/photo_2023-08-16_11-47-21.jpg'
function Projects() {
    return (
        <div>
            <div className='bg-black text-white'>
                <div className='pl-32 py-3 text-4xl font-semibold hover:scale-125'>Projects</div>
                <div className='flex justify-normal'>
                    <div className='px-20 py-10'>
                        <img className='hover:rotate-180' src={Student} />
                    </div>
                    <div className=''>
                        <div className='py-4'
                        >A student management system is valuable tool for
                            education institution to <br />stramline administrative
                            tasks and efficiently manages students information. </div>
                        <div className=''>
                            we have developed a student management system
                            that serves as a comprehensive<br /> platform for
                            managing student -related tasks within educational
                            institution
                        </div>
                        <div className='py-4'>
                            the system provides a user -friendly interface for
                            administrators, teacher, parents <br /> and students to
                            access and manage student information.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects