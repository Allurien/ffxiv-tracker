import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button, Modal } from 'antd';
import Header from './components/header';
import Links from './components/links';
import Splash from './components/splash';
import Tasks from './components/tasks/tasks';
import MasterTasks from './components/tasks/masterTasks';
import './App.css';

function App() {
    const [visible, setVisible] = React.useState(true);
    const [token] = React.useState(false);
    useEffect(() => {
        setVisible(true);
    }, []);
    return (
        <div>
            <Header />
            <main>
                <Modal
                    title="Login"
                    visible={visible}
                    onCancel={()=>setVisible(false)}
                    footer={null}
                >
                    <Button size="large" href={"https://api.beta.ffxiv.anid.dev/login"}>
                        Login with Discord
                    </Button>
                </Modal>
                <Switch>
                    <Route path="/" exact component={Splash} />
                    <Route path="/links" component={Links} />
                    <Route path="/tasks" component={Tasks} />
                    <Route path="/master-tasks" component={MasterTasks} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
