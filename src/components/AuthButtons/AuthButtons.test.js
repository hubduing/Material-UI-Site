import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import AuthButtons from "./index"; 
import AuthDialog from "../AuthDialog";

jest.mock("../AuthDialog", () => {
  return jest.fn(({ open, onClose, onSubmit, title }) =>
    open ? (
      <div>
        <h1>{title}</h1>
        <button onClick={() => onSubmit("mockedToken")}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null
  );
});

describe("AuthButtons", () => {
  beforeEach(() => {
    localStorage.clear(); // Очищаем localStorage перед каждым тестом
  });

  test("рендерит кнопки Log In и Sign Up, когда не выполнен вход", () => {
    render(<AuthButtons />);

    expect(screen.getByRole('button', { name: /Log In/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });

  test("рендерит кнопку Log Out, когда выполнен вход", () => {
    render(<AuthButtons />);

    fireEvent.click(screen.getByRole('button', { name: /Log In/i }));
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByRole('button', { name: /Log Out/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Sign Up/i })).not.toBeInTheDocument();
  });

  test("открывает диалог входа по клику на кнопку Log In", () => {
    render(<AuthButtons />);

    fireEvent.click(screen.getByRole('button', { name: /Log In/i }));

    // Ожидаем, что заголовок "Log In" будет в диалоге
    expect(screen.getByRole('heading', { name: /Log In/i })).toBeInTheDocument();
  });

  test("открывает диалог регистрации по клику на кнопку Sign Up", () => {
    render(<AuthButtons />);

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    // Ожидаем, что заголовок "Sign Up" будет в диалоге
    expect(screen.getByRole('heading', { name: /Sign Up/i })).toBeInTheDocument();
  });

  test("обрабатывает успешный вход и обновляет localStorage", () => {
    render(<AuthButtons />);

    fireEvent.click(screen.getByRole('button', { name: /Log In/i }));
    fireEvent.click(screen.getByRole('button', { name: /Submit/i })); 

    expect(localStorage.getItem("token")).toBe("mockedToken");
    expect(screen.getByRole('button', { name: /Log Out/i })).toBeInTheDocument();
  });

  test("обрабатывает выход и очищает localStorage", () => {
    render(<AuthButtons />);

    fireEvent.click(screen.getByRole('button', { name: /Log In/i }));
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    fireEvent.click(screen.getByRole('button', { name: /Log Out/i }));

    expect(localStorage.getItem("token")).toBeNull();
    expect(screen.getByRole('button', { name: /Log In/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });
});
