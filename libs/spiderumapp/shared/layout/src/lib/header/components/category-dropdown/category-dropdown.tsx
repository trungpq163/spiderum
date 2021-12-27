/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Transition } from '@headlessui/react';
import { Link } from '@nextui-org/react';
import { DropdownIcon } from '@spiderum/shared/ui';
import {
  categoryItems,
  ICategoryItem,
} from '@spiderum/spiderumapp/shared/util/mock-data';
import { Fragment } from 'react';
import { NavDropdown } from './category-dropdown.styles';

/* eslint-disable-next-line */
export interface CategoryDropdownProps {}

export function CategoryDropdown(props: CategoryDropdownProps) {
  return (
    <Menu
      as="div"
      className="relative inline-block font-sans text-xs text-left"
    >
      <Menu.Button className="" as="div">
        <NavDropdown className="mr-auto">
          Danh mục
          <DropdownIcon color="#6E6D7A" className="ml-0.2" />
        </NavDropdown>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-0 w-44.4 mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none grid grid-cols-2 px-2.5 py-1.5"
          as="div"
        >
          {categoryItems.map((item: ICategoryItem, index: number) => (
            <Menu.Item as="div" key={index} className="mb-1.2">
              {({ active }) => (
                <Link
                  color="#757575"
                  href={item.route}
                  style={{ color: active ? '#292929' : '#757575' }}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default CategoryDropdown;
