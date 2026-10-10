<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep shared portfolio sections and source content in `src/components/portfolio`, with distinct TanStack content routes, so the PDF-based identity stays consistent across pages.
- Store original media and font files through asset pointers, so large portfolio files are served without bloating the source repository.
- Keep all portfolio visual styling and interactive variants in the global design system, so the same design applies across pages and screen sizes.
