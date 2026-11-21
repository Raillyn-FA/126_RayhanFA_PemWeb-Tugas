import type { ComponentProps } from "react"
import SettingsPage from "../../src/components/pages/SettingsPage"

export default function Page(props: ComponentProps<typeof SettingsPage>) {
    return <SettingsPage {...props} />
}
