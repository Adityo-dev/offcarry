"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CustomerForm({ onSubmit }) {
  const [formData, setFormData] = useState(() => {
    // Initialize form data from localStorage if available
    const savedData = localStorage.getItem('customerInfo')
    return savedData ? JSON.parse(savedData) : {
      name: "",
      email: "",
      mobile: "",
    }
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  })

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('customerInfo', JSON.stringify(formData))
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      mobile: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
      // Clear localStorage after successful submission
      localStorage.removeItem('customerInfo')
    }
  }

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="mb-6 text-center">
        <h3 className="text-lg font-medium">Start a Conversation</h3>
        <p className="text-sm text-gray-500 mt-1">
          Please fill in your details to begin chatting with our support team
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 flex-1">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your mobile number"
            className={errors.mobile ? "border-red-500" : ""}
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>

        <div className="mt-auto pt-4">
          <Button type="submit" className="w-full bg-primary text-white hover:bg-secondary">
            Start Chat
          </Button>
        </div>
      </form>
    </div>
  )
}
