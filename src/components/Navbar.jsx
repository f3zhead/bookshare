import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
export default function Navbar() {
  return (
    <Menu>
      <MenuList>
        <MenuItem>Search For Books</MenuItem>
        <MenuItem>View Catalog</MenuItem>
        <MenuItem>Share Catalog</MenuItem>
      </MenuList>
    </Menu>
  )
}
