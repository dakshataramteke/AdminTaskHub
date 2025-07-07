import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';

export const SideNav = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: "Employee",
    path: "/dashboard/employee",
    icon: <PeopleIcon />,
    cName: 'nav-text'
  },
  {
    title: "Project",
    path: "/dashboard/project",
    icon: <LibraryBooksIcon />,
    cName: 'nav-text'
  },
  {
    title: "Task Manager",
    path: "/dashboard/taskmanager",
    icon: <AssignmentIcon />,
    cName: 'nav-text'
  },
];
