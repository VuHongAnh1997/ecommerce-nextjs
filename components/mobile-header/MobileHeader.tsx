import useCategories from "@/hooks/useCategories";
import { useStore } from "@/store/store";
import { Category } from "@/store/type";
import { ICONS } from "@/utils/constant";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchInput from "../search-input/SearchInput";

interface MobileHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ isOpen, onClose }) => {
  const categoriesState = useCategories();
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const { updateCategorySelected } = useStore();
  const router = useRouter();

  const onClickSelectCategory = (category: Category) => {
    updateCategorySelected(category);
    router.push(`/products/${category.id}`);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-white text-white p-4 transform z-10 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300`}
    >
      <div className="w-100 flex justify-end mb-3">
        <XMarkIcon className="h-6 w-6 text-gray-500" onClick={onClose} />
      </div>

      <SearchInput onSearch={() => ({})} />

      {categoriesState.length > 0 && (
        <div className="flex mt-4">
          <div className="root-categories">
            {categoriesState.map(
              (item, index) =>
                ICONS[index] && (
                  <div
                    key={item.id}
                    className={`px-4 py-5 flex flex-col items-center ${
                      activeMenuIndex === index
                        ? "border-s-8 border-green-400"
                        : "border"
                    }`}
                    onClick={() => setActiveMenuIndex(index)}
                  >
                    <Image
                      src={ICONS[index]}
                      width={25}
                      height={25}
                      alt="icon"
                    />
                    <div className="text-sky-950 mt-2">{item.name}</div>
                  </div>
                )
            )}
          </div>
          <div className="child-categories text-black ml-5">
            <div className="mb-2.5">
              {categoriesState[activeMenuIndex].name}
            </div>
            {categoriesState[activeMenuIndex].children.map((item) => (
              <div key={item.id} className="mb-2.5">
                <div
                  className="text-base text-green-400 capitalize"
                  onClick={() => onClickSelectCategory(item)}
                >
                  {item.name}
                </div>
                {item.children.map((item2) => (
                  <div
                    key={item2.id}
                    className="text-sm capitalize"
                    onClick={() => onClickSelectCategory(item2)}
                  >
                    {item2.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
