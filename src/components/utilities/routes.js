
import { 
	Contact, 
	Dashboard, 
	Home, 
	ServiceDetail, 
	Services, 
	NotFound 
} from "./lazy"

const ROUTES = [
	{
		path: "/",
		exact: true,
		component: Home
	},
	{
		path: "/services",
		exact: false,
		component: Services
	},
	{
		path: "/contact",
		exact: false,
		component: Contact
	},
	{
		path: "/services:id",
		exact: false,
		component: ServiceDetail
	},
	{
		path: "/dashboard",
		exact: true,
		component: Dashboard
	},
	{
		path: "",
		exact: false,
		component: NotFound
	},
]

export default ROUTES