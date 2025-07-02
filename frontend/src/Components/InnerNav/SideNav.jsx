import SegmentIcon from '@mui/icons-material/Segment';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SideNav = [
  {
    title: "Home",
    path: "/",
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
    path: "/project",
    icon: <LibraryBooksIcon />,
    cName: 'nav-text'
  },
  {
    title: "Task Manager",
    path: "/task",
    icon: <AssignmentIcon />,
    cName: 'nav-text'
  },
];
