import React from 'react'

export const Home = React.lazy(() => import("../pages/landing/home/Home"))
export const Services = React.lazy(() => import("../pages/landing/services/serviceLists/ServiceLists"))
export const ServiceDetail = React.lazy(() => import("../pages/landing/services/serviceDetail/ServiceDetail"))
export const Contact = React.lazy(() => import("../pages/landing/contact/Contact"))
export const Dashboard = React.lazy(() => import("../pages/dashboard/dashhome/DashHome"))
export const NotFound = React.lazy(() => import("../pages/landing/notfound/NotFound"))