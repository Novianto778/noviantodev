const useScrollTo = () => {
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, '');
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        window?.scrollTo({
            behavior: 'smooth',
            top:
                (elem &&
                    elem?.getBoundingClientRect().top +
                        window.pageYOffset -
                        80) ||
                0,
        });
    };
    return { handleScroll };
};

export default useScrollTo;
