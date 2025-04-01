
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, X, BrainCircuit } from 'lucide-react';
import { toast } from 'sonner';

type Response = {
  condition: string;
  description: string;
  recommendation: string;
  urgency: 'low' | 'medium' | 'high';
};

type Props = {
  onClose: () => void;
};

const mockResponses: Record<string, Response> = {
  "headache": {
    condition: "Tension Headache",
    description: "Tension headaches are the most common type of headache and are characterized by mild to moderate pain that feels like a tight band around your head.",
    recommendation: "Rest, hydration, and over-the-counter pain relievers may help. If symptoms persist for more than a few days, consult with a doctor.",
    urgency: "low"
  },
  "chest pain": {
    condition: "Potential Cardiac Issue",
    description: "Chest pain can be caused by various conditions ranging from muscle strain to serious heart problems.",
    recommendation: "Please seek immediate medical attention. Chest pain should always be evaluated by a healthcare professional as soon as possible.",
    urgency: "high"
  },
  "fever": {
    condition: "Potential Infection",
    description: "Fever is often a sign that your body is fighting an infection. It can be bacterial or viral in nature.",
    recommendation: "Rest, hydration, and over-the-counter fever reducers may help. If fever persists over 3 days or exceeds 103°F (39.4°C), consult with a doctor.",
    urgency: "medium"
  },
  "cough": {
    condition: "Upper Respiratory Infection",
    description: "Coughing is a common symptom of upper respiratory infections like the common cold or bronchitis.",
    recommendation: "Rest, hydration, and over-the-counter cough suppressants may help. If symptoms persist for more than a week or are accompanied by difficulty breathing, consult with a doctor.",
    urgency: "low"
  }
};

const AISymptomChecker: React.FC<Props> = ({ onClose }) => {
  const [symptoms, setSymptoms] = useState('');
  const [response, setResponse] = useState<Response | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const analyzeSymptoms = () => {
    if (!symptoms.trim()) {
      toast.error("Please describe your symptoms first");
      return;
    }
    
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const lowerCaseSymptoms = symptoms.toLowerCase();
      
      // Check if any of our mock keywords are in the symptoms
      const matchedKeyword = Object.keys(mockResponses).find(
        keyword => lowerCaseSymptoms.includes(keyword)
      );
      
      if (matchedKeyword) {
        setResponse(mockResponses[matchedKeyword]);
      } else {
        setResponse({
          condition: "General Health Concern",
          description: "Based on your description, we couldn't identify a specific condition.",
          recommendation: "Monitor your symptoms and consult with a healthcare provider if they worsen or persist.",
          urgency: "medium"
        });
      }
      
      setLoading(false);
    }, 1500);
  };

  const getUrgencyClass = (urgency: string) => {
    switch (urgency) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const resetForm = () => {
    setSymptoms('');
    setResponse(null);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-medical-red text-white p-6">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-6 w-6" />
                <DialogTitle className="text-2xl font-bold">AI Symptom Checker</DialogTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClose} className="text-white hover:bg-medical-red/90">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription className="text-white/90 pt-2">
              Describe your symptoms and our AI will provide preliminary insights. 
              <span className="font-bold block mt-1">Note: This is not a medical diagnosis.</span>
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          {!response ? (
            <>
              <div className="mb-4">
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">
                  Please describe your symptoms in detail:
                </label>
                <Textarea
                  id="symptoms"
                  placeholder="Example: I've had a headache for 3 days, along with a mild fever and fatigue."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="min-h-[150px] focus:ring-medical-red focus:border-medical-red"
                />
              </div>
              <Button
                onClick={analyzeSymptoms}
                disabled={loading || !symptoms.trim()}
                className="w-full bg-medical-red hover:bg-medical-red/90 text-white"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Symptoms...
                  </>
                ) : (
                  "Analyze Symptoms"
                )}
              </Button>
              <p className="mt-3 text-xs text-gray-500 text-center">
                This tool is for informational purposes only and does not replace professional medical advice.
              </p>
            </>
          ) : (
            <div className="space-y-4">
              <div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getUrgencyClass(response.urgency)}`}>
                  {response.urgency === 'low' ? 'Low Urgency' : 
                   response.urgency === 'medium' ? 'Medium Urgency' : 'High Urgency'}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Possible Condition</h3>
                <p className="text-gray-800">{response.condition}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                <p className="text-gray-700">{response.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Recommendation</h3>
                <p className="text-gray-700">{response.recommendation}</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 text-sm text-yellow-800">
                <strong>Important:</strong> This is not a medical diagnosis. Always consult with a healthcare professional for proper medical advice.
              </div>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" onClick={resetForm} className="flex-1">
                  Check New Symptoms
                </Button>
                <Button
                  className="flex-1 bg-medical-red hover:bg-medical-red/90 text-white"
                  onClick={() => toast.success("Appointment request received. We'll contact you shortly.")}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AISymptomChecker;
