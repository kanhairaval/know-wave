import React, { createContext, useContext, useState } from "react";

const CategoriesAndStartContext = createContext();

export const useCategoriesAndStartContext = () => {
    return useContext(CategoriesAndStartContext);
};

export const RenderingCategoriesAndSearchProvider = ({ children }) => {
    const [showCategories, setShowCategories] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const onStartCategoriesClick = () => {
        console.log("Start Reading or Categories clicked.");
        setShowCategories(true);
        setShowSearch(false);
    };

    const onSearchClick = () => {
        console.log("Search clicked.");
        setShowSearch(true);
        setShowCategories(false);
    };

    const onOtherClick = () => {
        console.log("Other clicked.");
        setShowSearch(false);
        setShowCategories(false);
    };

    return (
        <CategoriesAndStartContext.Provider value = {{ showCategories, showSearch, onStartCategoriesClick, onSearchClick, onOtherClick }}>
            {children}
        </CategoriesAndStartContext.Provider>
    );
};

const RegisterModalContext = createContext();

export const useRegisterModalContext = () => {
    return useContext(RegisterModalContext);
};

export const RenderingRegisterModalProvider = ({ children }) => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const onClickOpenRegisterModal = () => {
        console.log("Register clicked.");
        setShowRegisterModal(true);
    };

    const onClickCloseRegisterModal = () => {
        console.log("Close X clicked for closing register modal");
        setShowRegisterModal(false);
    };

    return (
        <RegisterModalContext.Provider value = {{ showRegisterModal, onClickOpenRegisterModal, onClickCloseRegisterModal }}>
            {children}
        </RegisterModalContext.Provider>
    );
};

const LoginModalContext = createContext();

export const useLoginModalContext = () => {
    return useContext(LoginModalContext);
};

export const RenderingLoginModalProvider = ({ children }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const onClickOpenLoginModal = () => {
        console.log("Register clicked.")
        setShowLoginModal(true);
    };

    const onClickCloseLoginModal = () => {
        console.log("Close X clicked for closing register modal")
        setShowLoginModal(false);
    };

    return (
        <LoginModalContext.Provider value = {{ showLoginModal, onClickOpenLoginModal, onClickCloseLoginModal }}>
            {children}
        </LoginModalContext.Provider>
    );
};

const ContactUsModalContext = createContext();

export const useContactUsModalContext = () => {
    return useContext(ContactUsModalContext);
};

export const RenderingContactUsModalProvider = ({ children }) => {
    const [showContactUsModal, setShowContactUsModal] = useState(false);

    const onClickOpenContactUsModal = () => {
        console.log("Contact Us clicked.")
        setShowContactUsModal(true);
    };

    const onClickCloseContactUsModal = () => {
        console.log("Close X clicked for closing contact us modal")
        setShowContactUsModal(false);
    };

    return (
        <ContactUsModalContext.Provider value = {{ showContactUsModal, onClickOpenContactUsModal, onClickCloseContactUsModal }}>
            {children}
        </ContactUsModalContext.Provider>
    );
};

const CareersModalContext = createContext();

export const useCareersModalContext = () => {
    return useContext(CareersModalContext);
};

export const RenderingCareersModalProvider = ({ children }) => {
    const [showCareersModal, setShowCareersModal] = useState(false);

    const onClickOpenCareersModal = () => {
        console.log("Careers clicked.")
        setShowCareersModal(true);
    };

    const onClickCloseCareersModal = () => {
        console.log("Close X clicked for closing careers modal")
        setShowCareersModal(false);
    };

    return (
        <CareersModalContext.Provider value = {{ showCareersModal, onClickOpenCareersModal, onClickCloseCareersModal }}>
            {children}
        </CareersModalContext.Provider>
    );
};