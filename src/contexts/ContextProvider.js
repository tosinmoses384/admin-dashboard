import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const save = (value) => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(`todos`, JSON.stringify(value));
  };

  const getItem = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const got = localStorage.getItem(`todos`);
    return got ? JSON.parse(got) : null;
  };

  const addToItems = useCallback(
    (inputValue) => {
      // WRITE YOUR LOGIC HERE

      const StartDate = inputValue.StartDate?.props?.children;
      const EndDate = inputValue.EndDate?.props?.children;
      const { NameOfTask, Hours, Progress } = inputValue;

      setItems((prev) => {
        console.log(prev);
        prev.push({
          StartDate,
          EndDate,
          NameOfTask,
          Hours,
          Progress,
        });
      });

      save(items);
    },
    [items]
  );

  useEffect(() => {
    const itemFromStorage = getItem("todos");
    const initialItem = [
      {
        StartDate: "Jan 1, 2022",
        EndDate: "Jan 31, 2022",
        NameOfTask: "User journey of the project",
        Hours: "80",
        Progress: "60% complete",
      },
      {
        StartDate: "Feb 1, 2022",
        EndDate: "Feb 28, 2022",
        NameOfTask: "Wireframing the project",
        Hours: "80",
        Progress: "60% complete",
      },
      {
        StartDate: "March 1, 2022",
        EndDate: "March 31, 2022",
        NameOfTask: "User interface design",
        Hours: "80",
        Progress: "60% complete",
      },
    ];

    setItems(itemFromStorage ? itemFromStorage : initialItem);
  }, []);

  const [screenSize, setScreenSize] = useState(undefined);

  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        items,
        addToItems,
        save,
        getItem,

        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,

        setIsClicked,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
