"use client";

import { Button } from "@/components/ui/button";

export default function EnhanceModelPage() {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-gray-50">
      {/* Header */}
      <div className="max-w-[2000px] mx-auto px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900">Enhance Your Model</h1>
        <p className="text-sm text-gray-500 mt-1">
          Refine your fine-tuned model for optimal performance. Add more data, tweak parameters, or proceed to testing.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-[2000px] mx-auto px-8 py-6 space-y-6">
        {/* Performance Summary */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Performance Summary</h2>
          <p className="text-sm text-gray-500 mb-6">
            Refine your fine-tuned model for optimal performance. Add more data, tweak parameters, or proceed to testing.
          </p>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Accuracy</span>
            <span className="text-sm font-medium text-gray-900">98%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: "98%" }}
            ></div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
              <span className="text-sm text-gray-600">
                Adding 500 more labeled samples could improve accuracy by 3%
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
              <span className="text-sm text-gray-600">
                Consider adjusting the learning rate to fine-tune output stability.
              </span>
            </li>
          </ul>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Call-to-Action Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Upload More Files
            </Button>
            <Button 
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              Edit Pre-processing Parameters
            </Button>
          </div>
        </div>

        {/* Skip Button */}
        <div className="flex justify-end">
          <Button 
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Skip Enhancements and Proceed to Testing
          </Button>
        </div>
      </div>
    </div>
  );
}