interface LayoutState {
  pageTitle: string;
  pageSubtitle: string;
}

export const useLayoutState = () => {
  const layoutState = useState<LayoutState>("layout-state", () => ({
    pageTitle: "",
    pageSubtitle: "",
  }));

  const setLayoutState = (data: LayoutState) => {
    layoutState.value = data;
  };

  return { layoutState, setLayoutState };
};
