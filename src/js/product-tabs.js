const onInit = () => {
    const tabs = document.querySelectorAll('.tabs-wrapper')
    if (tabs) {
        tabs.forEach((tabContainer) => {
            const tabTitles = Array.from(tabContainer.querySelectorAll('.tabs--title'))
            const tabContent = Array.from(tabContainer.querySelectorAll('.tabs--content'))
            let activeIndex;

            const toggleTabs = (activeIndex) => {
                const activeContent = tabContent.filter(content => content.getAttribute('data-index') === activeIndex)
                const activeTitle = tabTitles.filter(title => title.getAttribute('data-index') === activeIndex)

                tabTitles.forEach(title => title.classList.remove('active'))
                tabContent.forEach(content => content.classList.remove('active'))

                activeTitle[0].classList.add('active')
                activeContent[0].classList.add('active')
            }
            tabTitles.forEach((title) => {
                title.addEventListener('click', () => {
                    activeIndex = title.getAttribute('data-index');
                    toggleTabs(activeIndex)
                })
            })
        })
    }
}

document.addEventListener('DOMContentLoaded', onInit)