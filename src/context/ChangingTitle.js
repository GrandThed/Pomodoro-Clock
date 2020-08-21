export const changingTitle = (seconds, working) => {
    document.title = `${
        Math.floor(seconds / 60) <= 9
          ? "0" + Math.floor(seconds / 60)
          : Math.floor(seconds / 60)
      }:${seconds % 60 <= 9 ? "0" + (seconds % 60) : seconds % 60} ${working ? "of working" : "for a break!"}`
}
