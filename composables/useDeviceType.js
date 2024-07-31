export function useDeviceType() {
  const { width: windowWidth } = useWindowSize()  // from VueUse
  let isMobile = ref(null)

  const checkDeviceType = () => isMobile.value = (windowWidth.value <= 768)

  onMounted(() => checkDeviceType())

  useEventListener(window, 'resize', checkDeviceType)

  return { isMobile }
}