import { useCallback, useMemo, useState } from "react";

export function useModalHooks() {
  const [openStories, setOpenStories] = useState(false);
  const [openReels, setOpenReels] = useState(false)

  const openStoriesModal = useCallback(() => setOpenStories(true), []);
  const closeStoriesModal = useCallback(() => setOpenStories(false), []);

  const openReelsModal = useCallback(() => setOpenReels(true), []);
  const closeReelsModal = useCallback(() => setOpenReels(false), []);

  return useMemo(() => ({
    openStories,
    openReels,
    openStoriesModal,
    openReelsModal,
    closeStoriesModal,
    closeReelsModal
  }), [openStories, openReels, openStoriesModal, openReelsModal, closeStoriesModal, closeReelsModal])
}