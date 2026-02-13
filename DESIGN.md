# Git Storyteller: Design & UX

**Status:** Proposed
**Designer:** Philip J. Fry
**Theme:** "Neon Noir" / Terminal Chic

## 1. The Vibe (Aesthetic Direction)
We are deleting the color white from the palette. The UI should look like a hacker's dream journal.

*   **Background:** Deepest void black (`#050505`) to charcoal gray (`#121212`).
*   **Typography:** Monospace for code/commits (`JetBrains Mono`), crisp sans-serif for the narrative (`Inter` or `Geist`).
*   **Accents:**
    *   *Additions:* Neon Green (`#00ff41`)
    *   *Deletions:* Hot Pink (`#ff0055`)
    *   *Narrative Highlights:* Cyber Cyan (`#00f3ff`)
*   **Motion:** Everything glides. No jarring cuts. Smooth ease-in-out transitions.

## 2. User Experience Flow

### Phase 1: The Airlock (Landing Page)
*   **Visual:** A centered, pulsating input field that looks like a command prompt.
*   **Action:** User pastes a local file path.
*   **Feedback:** As they type, the border glows. On enter, a "scanning" matrix-rain effect briefly plays.

### Phase 2: The Tuning (Configuration)
Before we generate, we ask for the "Genre".
*   *The Bard:* Shakespearean tragedy (good for failed refactors).
*   *The Tech Lead:* Professional, concise, slightly passive-aggressive.
*   *The Noir:* "It was a dark and stormy merge request..."
*   **UI:** Large, selectable cards with animated icons.

### Phase 3: The Generation (Loading State)
*   **Don't show a spinner.** Spinners are boring.
*   **Show the raw data:** Display a blurred, rapid-fire stream of the raw commit hashes and messages flying by in the background, while the "Story" types itself out in the foreground. It feels like the machine is *thinking*.

### Phase 4: The Story (Main View)
This is the reading experience.

*   **Layout:** Single column, centered, max-width 65ch (optimal reading length).
*   **Chapters:** Broken down by time periods (e.g., "Chapter 1: The First Commit", "Chapter 2: The Refactor from Hell").
*   **Interactivity:**
    *   Hovering over a specific narrative sentence highlights the *actual* commit hash in the margin.
    *   Clicking a commit hash expands a "Source of Truth" drawer showing the raw diff.
*   **Navigation:** A timeline on the left edge (dots connected by a line). As you scroll, the active period lights up.

## 3. Key Components

### `InputConsole`
A glowing input box.
*   *Props:* `onPathSubmit`, `isValid`
*   *State:* `focused`, `validating`

### `GenreCard`
*   *Props:* `title`, `description`, `icon`, `selected`
*   *Style:* Glassmorphism effect (frosted blurred background) with a neon border on selection.

### `StoryStream`
The container for the incoming text.
*   *Tech:* Uses a typing effect hook. The text doesn't just appear; it's *typed* character by character (accelerated).

### `CommitMargin`
A sticky side element.
*   *Behavior:* follows the scroll position but snaps to the relevant paragraph.

## 4. Mobile Responsiveness
*   Collapse the Timeline and Commit Margin into a bottom sheet.
*   Keep the text legible and high-contrast.

## 5. "The Sexy Factor"
*   **Glow Effects:** Buttons don't just have shadows; they cast *light*.
*   **Sound (Optional):** Subtle, satisfying clicks (mechanical keyboard samples) when interacting with UI elements.
