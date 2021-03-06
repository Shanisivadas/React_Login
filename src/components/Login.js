import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom"
import Home from "./Home";
function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const checkLogin = () => {
        if (userName.length == 10) {
            const arr = Array.from(String(password), Number);
            var total = 0;
            for (var i in arr) {
                total += arr[i];
            }
            if ((total == 10) && (userName.length == 10))
                navigate('/Home');
            else {
                setError(true);
            }

        }
    }
    return (
        <div><Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '50vh' }}
        >

            <Grid item xs={3}>


                <h2>WELCOME TO LOGIN</h2>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div >
                            <TextField
                                required
                                id="outlined-required"
                                label="UserName"
                                placeholder="Enter the Username"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                placeholder="Enter the Password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div><Box textAlign='center'>
                            <Button variant="outlined" align-items="center" onClick={checkLogin}>Login</Button>
                        </Box>

                        </div>
                    </CardContent>
                    {error ? <h4>Username or Password is incorrect</h4> : ""}
                </Card>  </Grid>

        </Grid>
        </div>

    )
}
export default Login;