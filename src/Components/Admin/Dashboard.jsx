import React from 'react';
import '../Admin/Admin.css' // Import your CSS file for styling
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()
    const handlelogout = async()=>{
        alert('are you sure want to logout')
        await signOut(auth);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/Signin')

    }
    

    return (
        <div className="d-flex" id="wrapper">
          
        <div className="border-end bg-white" id="sidebar-wrapper">
            {/* <div className="sidebar-heading border-bottom bg-light p-2" style={{whiteSpace:'nowrap'}} >Start Bootstrap</div> */}
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Users Quaries</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Job Applications</a>
                {/* <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User Data Collections</a> */}
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Add job</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Change password</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                <a type='button' href='/' className="list-group-item list-group-item-action list-group-item-light p-3"   onClick={handlelogout} >Logout</a>
            </div>
        </div>
    
        <div id="page-content-wrapper">
              
        
            <div className="container-fluid">
                <h1 className="mt-4">Simple Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>
                    Make sure to keep all page content within the
                    <code>#page-content-wrapper</code>
                    . The top navbar is optional, and just for demonstration. Just create an element with the
                    <code>#sidebarToggle</code>
                    ID which will toggle the menu when clicked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio vitae iusto vel numquam illo soluta accusantium labore deleniti. Voluptatibus dignissimos possimus quis voluptatum consectetur! Sit modi quaerat iste dolorum reprehenderit aut cum. Iure explicabo sapiente tempore maiores, iste modi dolor optio consequatur, atque impedit perferendis? Temporibus, tenetur iste. Sint doloribus quaerat laudantium ex corporis quas ullam perspiciatis ad ipsum nemo numquam eligendi sapiente possimus sunt ea atque, voluptate est neque minima aliquam! Laborum, labore nihil pariatur voluptatem quisquam quod provident natus. Animi rerum eligendi deserunt iusto veniam dolorum, quis aliquam adipisci nam in, cupiditate doloribus, quaerat at explicabo ab voluptatibus saepe reiciendis. Similique architecto ad atque suscipit, reprehenderit sunt quo, libero numquam velit mollitia et. Fugiat laudantium, eveniet animi accusamus illum dignissimos quos error quia ullam, possimus non, eligendi consequuntur laboriosam earum aliquam? Magni quisquam sequi saepe perspiciatis nulla consequuntur sed sapiente ullam amet, vitae laboriosam mollitia iure nesciunt blanditiis. Odit, perferendis. Aliquid reiciendis illo possimus placeat fuga optio, sapiente veritatis accusamus laborum veniam. Quasi iure quidem temporibus minima nulla perferendis neque obcaecati porro velit adipisci, autem non animi praesentium dolorem, blanditiis iusto omnis doloremque ad architecto voluptatem tempora ut. Enim atque quas cum aliquam ab repudiandae minus voluptate vero, reprehenderit similique esse blanditiis molestias ratione? Doloremque doloribus facilis modi cupiditate quidem ratione laboriosam, ipsam impedit illum saepe officia recusandae non voluptates temporibus ullam excepturi perspiciatis perferendis et alias quisquam odio id debitis. Nobis consectetur, reprehenderit repellendus, inventore quisquam laborum repellat, mollitia magni maiores vero ducimus nesciunt. Debitis laborum illum quaerat aperiam. Ratione rerum quasi neque deleniti fuga aliquam dolores, voluptas, enim consequuntur vero repudiandae! Eum commodi harum atque quod, autem maiores maxime aperiam distinctio dolorum necessitatibus laboriosam consequuntur ab itaque quo ea placeat sint, aliquam cupiditate architecto, quidem quam odio dolores numquam. Error, itaque cupiditate similique quidem amet laborum praesentium expedita ut, et assumenda unde alias fugit accusantium aliquam nulla totam atque sit debitis at illum quam rem architecto consequatur. Repellat animi id dignissimos beatae, commodi quibusdam voluptate a temporibus fuga unde quidem explicabo tenetur sunt rem eius debitis iure saepe aliquid minus atque qui earum nesciunt inventore quod! Harum hic dolorum sint sunt sed vero nesciunt ea, velit nostrum atque quod numquam. Dolor cupiditate minima at commodi laudantium ducimus maiores dolore omnis, illum et excepturi, dignissimos vel quam consequatur consequuntur dolorum architecto temporibus voluptatum? Eligendi repellat impedit accusamus, error iusto provident saepe totam nulla nihil expedita quod neque, rem molestiae, sequi voluptates non tempora cumque suscipit. Minus eum commodi impedit alias ipsam unde natus doloremque molestiae eius fuga nesciunt sint quis est veniam, repellendus dolore doloribus quidem dolorem obcaecati numquam placeat harum officia? Sequi consequatur necessitatibus ab aliquid nulla, totam inventore, dolorem fugit quibusdam velit incidunt, et saepe tempora aliquam delectus cupiditate maxime rem veniam tenetur molestiae ad perspiciatis quae reprehenderit! Quia, quaerat, labore distinctio voluptatum ipsum, officiis sunt sed sequi mollitia cupiditate eligendi ea impedit! Consectetur eligendi sed hic veniam voluptas molestiae ratione fugiat unde voluptate esse iusto repellendus, animi similique aliquam qui at id? Eveniet.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;
