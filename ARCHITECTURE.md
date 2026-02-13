# Git Storyteller: Architecture

**Status:** Proposed
**Architect:** Philip J. Fry
**Vibe:** Cyberpunk Historian

## 1. High-Level Overview
Git Storyteller is a localized web application that turns the dry, mechanical history of a Git repository into a compelling narrative. It bridges the gap between `git log` and a bedtime story.

The system runs locally to ensure fast access to the `.git` directory and privacy for your code.

## 2. System Components

### 2.1. The Backend (Node.js/Express)
The muscle. It doesn't need to be fancy; it just needs to be fast and capable of executing shell commands.

*   **Repository Scanner:** Locates local git repositories and validates them.
*   **Log Parser:** Executes `git log` with custom formatters to extract commits, diffs, authors, and timestamps.
*   **Narrative Engine (LLM Proxy):** Batches commit history and sends it to an LLM (OpenAI/Anthropic) with a specific system prompt to generate "chapters" of the story.
*   **API Layer:** REST endpoints to serve the frontend.

### 2.2. The Frontend (React + Vite)
The face. A single-page application (SPA) that consumes the backend API.

*   **Tech Stack:** React 19, Tailwind CSS, Framer Motion.
*   **State Management:** React Query (server state is king here).
*   **Router:** React Router (simple navigation between "Bookshelf" and "Story" views).

## 3. Data Flow

1.  **Selection:** User selects a local directory path via the UI.
2.  **Ingestion:** Backend runs `git log --reverse --pretty=format:...` to get raw history.
3.  **Chunking:** The history is too big for one prompt context window. The Backend groups commits by time (e.g., "The Sprint of '23") or quantity.
4.  **Generation:** Backend sends chunks to LLM:
    *   *Input:* Raw commit messages + diff summaries.
    *   *Output:* A Markdown-formatted story chapter.
5.  **Streaming:** The story chapters are streamed to the frontend via Server-Sent Events (SSE) or polled.
6.  **Rendering:** Frontend renders the Markdown with sexy typography and animations.

## 4. API Surface

*   `GET /api/repos`: List recently scanned repos.
*   `POST /api/scan`: Validate a path is a git repo.
*   `POST /api/storyify`: Start the generation process for a repo.
    *   *Body:* `{ path: string, style: 'epic' | 'technical' | 'comedy' }`
*   `GET /api/story/:id`: Get the generated story state.

## 5. Security & Privacy
*   **Local-First:** Code never leaves the machine *except* for the commit messages/diff summaries sent to the LLM API.
*   **Filtering:** Basic sensitive data filtering (regex for API keys) before sending to LLM.

## 6. Future Considerations
*   **Audiobook Mode:** TTS integration to read the commit history.
*   **Visualizer:** Generate DALL-E images for major releases.
