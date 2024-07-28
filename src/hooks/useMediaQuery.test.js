import { renderHook } from "@testing-library/react";
import useMediaQuery from "./useMediaQuery";

describe("useMediaQuery", () => {
  beforeEach(() => {
    window.innerWidth = 1024;
  });

  test("Desktop", () => {
    window.innerWidth = 1300;

    const { result } = renderHook(() => useMediaQuery());

    expect(result.current.isDesktopOrLaptop).toBe(true);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isMobile).toBe(false);
  });

  test("Tablet", () => {
    window.innerWidth = 1000;

    const { result } = renderHook(() => useMediaQuery());

    expect(result.current.isDesktopOrLaptop).toBe(false);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isMobile).toBe(false);
  });

  test("Mobile", () => {
    window.innerWidth = 500;

    const { result } = renderHook(() => useMediaQuery());

    expect(result.current.isDesktopOrLaptop).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isMobile).toBe(true);
  });

  //   test("should update media queries on window resize", () => {
  //     const { result } = renderHook(() => useMediaQuery());

  //     expect(result.current.isDesktopOrLaptop).toBe(true);
  //     expect(result.current.isTablet).toBe(false);
  //     expect(result.current.isMobile).toBe(false);

  //     act(() => {
  //       window.innerWidth = 800;
  //       window.dispatchEvent(new Event("resize"));
  //     });

  //     expect(result.current.isDesktopOrLaptop).toBe(true);
  //     expect(result.current.isTablet).toBe(true);
  //     expect(result.current.isMobile).toBe(false);

  //     act(() => {
  //       window.innerWidth = 500;
  //       window.dispatchEvent(new Event("resize"));
  //     });

  //     expect(result.current.isDesktopOrLaptop).toBe(false);
  //     expect(result.current.isTablet).toBe(false);
  //     expect(result.current.isMobile).toBe(true);
  //   });
});
