import Logo from '../../assets/logo.png'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

export default function Header({ show, setShow}) {
    return (
        <header>
            <img src={Logo} alt="Logo" className="logo" />
            <p className="header-projects">My Projects</p>
            <div className="btn-outer">
                <Button 
                    shape="circle" 
                    className="project-add-btn" 
                    size="large" 
                    style={{ width:"100px", height: "100px" }}
                    onClick={() => setShow(!show)}
                    icon={<PlusOutlined style={{ fontSize: '3rem', color: '#ffff' }} />}>
                </Button>
            </div>
        </header>
    )
}