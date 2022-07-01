import React from "react";
import { Route, Routes } from "react-router-dom";
import GameInfo from "../components/GameInfo";
import MainPage from '../components/MainPage'

const Home = React.lazy(() => import('../components/Home'))
const Discover = React.lazy(() => import('../components/Discover'))
const News = React.lazy(() => import('../components/News'))
export const Routers = () => (
    <Routes>
        <Route path='/' element={<MainPage />} >
            <Route path='/' element={<Home />} />
            <Route path='discover' element={<Discover />} />
            <Route path='news' element={<News />} />
            <Route path='item/:id' element={<GameInfo />} />

        </Route>


    </Routes>
)