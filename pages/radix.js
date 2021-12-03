import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Test = () => {
  return (  
    <div className="flex justify-center bg-gray-200">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="px-5 py-2 rounded-md transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive">…</DropdownMenu.Trigger>

        <DropdownMenu.Content className=" border-brandDefault border-brandBorder rounded p-1 overflow-hidden">
          <DropdownMenu.Item className="px-2 py-1 hover:bg-brandOrange/30 hover:text-brandTextPrimary rounded">Avocado</DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="google.com" target="_blank">google</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>Potato potato</DropdownMenu.Item>
          <DropdownMenu.DropdownMenuArrow/>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>


  );
}
 
export default Test;