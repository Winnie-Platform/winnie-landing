"use client"

import { useEffect, useRef, useState } from "react"

const STORAGE_KEY = "winnie-closure-notice-dismissed"

const TITLE = "Thông báo ngừng dịch vụ · 서비스 종료 안내 · Service Closure Notice"
const BODY: { lang: string; text: string }[] = [
  {
    lang: "vi",
    text: "Dịch vụ Winnie sẽ ngừng hoạt động vào ngày 31/10/2026. Vui lòng lưu dữ liệu cần thiết trước ngày 30/10/2026. Toàn bộ thông tin thành viên sẽ được xóa ngay khi dịch vụ ngừng hoạt động.",
  },
  {
    lang: "ko",
    text: "위니 서비스가 2026년 10월 31일(토)에 종료됩니다. 남겨 두실 자료는 10월 30일까지 저장해 주세요. 종료와 함께 회원 정보는 모두 즉시 삭제돼요.",
  },
  {
    lang: "en",
    text: "Winnie will close on October 31, 2026. Please save any data you need before October 30. All member information will be deleted immediately at closure.",
  },
]
const CONTACT = "info.vn@yeowubie.com · info@yeowubie.com"
const BUTTON = "Đã hiểu · 확인 · OK"

function readDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1"
  } catch {
    return false
  }
}

function writeDismissed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1")
  } catch {
    // sessionStorage unavailable: the notice simply shows again next load
  }
}

export default function ClosureNotice() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!readDismissed()) setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    buttonRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
      } else if (e.key === "Tab") {
        e.preventDefault()
        buttonRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey, true)
    return () => {
      document.removeEventListener("keydown", onKey, true)
      document.body.style.overflow = prevOverflow
      previous?.focus?.()
    }
  }, [open])

  function close() {
    writeDismissed()
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483000,
        background: "rgba(0, 0, 0, 0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        fontFamily: "inherit",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="winnie-closure-title"
        aria-describedby="winnie-closure-body"
        style={{
          background: "#ffffff",
          color: "#111111",
          width: "100%",
          maxWidth: 520,
          maxHeight: "calc(100vh - 32px)",
          overflowY: "auto",
          borderRadius: 12,
          padding: "24px 20px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
          wordBreak: "keep-all",
          overflowWrap: "break-word",
          textAlign: "left",
          lineHeight: 1.6,
        }}
      >
        <h2
          id="winnie-closure-title"
          style={{ margin: "0 0 16px", fontSize: 18, fontWeight: 700, lineHeight: 1.4, wordBreak: "keep-all" }}
        >
          {TITLE}
        </h2>
        <div id="winnie-closure-body">
          {BODY.map((item) => (
            <p key={item.lang} lang={item.lang} style={{ margin: "0 0 12px", fontSize: 15, wordBreak: "keep-all" }}>
              {item.text}
            </p>
          ))}
          <p style={{ margin: "4px 0 20px", fontSize: 14, color: "#444444", wordBreak: "keep-all" }}>{CONTACT}</p>
        </div>
        <button
          ref={buttonRef}
          type="button"
          onClick={close}
          style={{
            display: "block",
            width: "100%",
            padding: "12px 16px",
            border: "none",
            borderRadius: 8,
            background: "#111111",
            color: "#ffffff",
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "inherit",
            cursor: "pointer",
            wordBreak: "keep-all",
          }}
        >
          {BUTTON}
        </button>
      </div>
    </div>
  )
}
